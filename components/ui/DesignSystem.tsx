
import React, { useEffect, useState, useRef } from 'react';
import { Wifi, Battery, Layers, Cpu } from 'lucide-react';

// --- SHARED HOOKS ---
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return scrollProgress;
};

// --- CORE COMPONENTS ---

export const ScrollReveal = ({ children, className = "", delay = 0 }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-md mb-8 w-fit shadow-sm">
      <span className="w-1.5 h-1.5 bg-[#FF4F00] rounded-full animate-pulse"></span>
      <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 font-bold">{text}</span>
  </div>
);

// --- VISUAL ASSETS (The Pod & Background) ---

export const FluidBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const vsSource = `
      attribute vec4 aVertexPosition;
      void main() { gl_Position = aVertexPosition; }
    `;

    const fsSource = `
      precision mediump float;
      uniform float uTime;
      uniform vec2 uResolution;

      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution;
        float time = uTime * 0.3; 
        
        float noise1 = snoise(uv * 2.0 + time);
        float noise2 = snoise(uv * 3.5 - time * 0.5);
        float pattern = noise1 * 0.5 + noise2 * 0.5;
        
        vec3 bg = vec3(0.97, 0.97, 0.96); // #F9F9F7
        vec3 orange = vec3(1.0, 0.31, 0.0); // #FF4F00
        vec3 deepOrange = vec3(0.8, 0.2, 0.0);

        vec3 color = mix(bg, orange, smoothstep(0.2, 0.8, pattern * 0.4 + uv.x * 0.2));
        color = mix(color, deepOrange, uv.y * 0.1);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const initShaderProgram = (gl: WebGLRenderingContext, vs: string, fs: string) => {
      const loadShader = (gl: WebGLRenderingContext, type: number, source: string) => {
        const shader = gl.createShader(type)!;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return shader;
      };
      const shaderProgram = gl.createProgram()!;
      gl.attachShader(shaderProgram, loadShader(gl, gl.VERTEX_SHADER, vs));
      gl.attachShader(shaderProgram, loadShader(gl, gl.FRAGMENT_SHADER, fs));
      gl.linkProgram(shaderProgram);
      return shaderProgram;
    };

    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
    const vertexPosition = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
    const uTime = gl.getUniformLocation(shaderProgram, 'uTime');
    const uResolution = gl.getUniformLocation(shaderProgram, 'uResolution');

    const positions = [-1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0];
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    let startTime = Date.now();
    const render = () => {
       if (!canvas) return;
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
       gl.viewport(0, 0, canvas.width, canvas.height);
       
       gl.clearColor(0.97, 0.97, 0.96, 1.0);
       gl.clear(gl.COLOR_BUFFER_BIT);

       gl.useProgram(shaderProgram);
       gl.enableVertexAttribArray(vertexPosition);
       gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
       gl.vertexAttribPointer(vertexPosition, 2, gl.FLOAT, false, 0, 0);

       gl.uniform1f(uTime, (Date.now() - startTime) * 0.001);
       gl.uniform2f(uResolution, canvas.width, canvas.height);

       gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
       requestAnimationFrame(render);
    };
    render();
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />;
};

export const ThePod = ({ scale = 1, className = "", highlight = 'none' }: { scale?: number, className?: string, highlight?: string }) => {
  const isHighlight = (key: string) => highlight === key;

  return (
    <div 
      className={`relative group perspective-1000 ${className}`}
      style={{ 
        width: `${200 * scale}px`, 
        height: `${200 * scale}px`,
        transformStyle: 'preserve-3d'
      }}
    >
       <div 
          className={`w-full h-full bg-[#FAFAFA] rounded-[45px] shadow-2xl flex items-center justify-center relative z-10 transition-all duration-700 ease-out border border-white/60
            ${isHighlight('mount') ? 'translate-z-[-20px] scale-95 opacity-80' : 'translate-z-0'}
          `}
        >
          <div className="absolute inset-0 rounded-[45px] bg-gradient-to-tr from-gray-50 to-white"></div>
          <div 
            className={`w-[60%] h-[60%] rounded-full bg-white shadow-inner flex items-center justify-center border transition-all duration-500 z-20
              ${isHighlight('nfc') ? 'border-[#FF4F00] shadow-[0_0_30px_rgba(255,79,0,0.3)] scale-110' : 'border-gray-100'}
            `}
          >
             <Wifi 
               size={60 * scale} 
               className={`transition-all duration-500 ${isHighlight('nfc') ? 'text-[#FF4F00]' : 'text-gray-300'}`} 
               strokeWidth={2.5} 
             />
          </div>
          <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 z-30 ${isHighlight('chip') ? 'opacity-100' : 'opacity-0'}`}>
             <div className="w-[80%] h-[80%] border border-[#FF4F00]/30 rounded-[35px] flex items-center justify-center bg-black/5 backdrop-blur-sm">
                 <Cpu className="text-[#FF4F00] animate-pulse" size={40} />
             </div>
          </div>
          <div 
            className={`absolute top-[15%] right-[15%] w-[4%] h-[4%] rounded-full bg-gray-200 z-30 transition-all duration-500
              ${isHighlight('battery') ? 'scale-[2.5] bg-[#32D74B] shadow-[0_0_15px_#32D74B]' : ''}
            `}
          >
             <div className={`w-full h-full rounded-full animate-pulse ${isHighlight('battery') ? 'bg-white' : 'bg-[#FF4F00]'}`}></div>
          </div>
       </div>
    </div>
  );
};
