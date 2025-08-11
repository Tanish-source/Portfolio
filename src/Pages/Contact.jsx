// import { useState, useEffect, useRef } from 'react'
// import FlipLink from '@/Components/ui/text-effect-flipper'

// const Contact = () => {

//   const [rightrotate, setRightRotate] = useState(0);
//   const [leftrotate, setLeftRotate] = useState(0);

//   const leftEyeRef = useRef(null);
//   const rightEyeRef = useRef(null);

//   useEffect(() => {
//     window.addEventListener('mousemove', (e) => {

//       const leftEyeRect = leftEyeRef.current.getBoundingClientRect();
//       const rightEyeRect = rightEyeRef.current.getBoundingClientRect();

//       const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2;
//       const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2;

//       const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2;
//       const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;

//       let mouseX = e.clientX;
//       let mouseY = e.clientY;

//       let leftDeltaX = mouseX - leftEyeCenterX;
//       let leftDeltaY = mouseY - leftEyeCenterY;

//       let rightDeltaX = mouseX - rightEyeCenterX;
//       let rightDeltaY = mouseY - rightEyeCenterY;

//       const leftAngle = Math.atan2(leftDeltaY, leftDeltaX) * (180 / Math.PI);
//       const rightAngle = Math.atan2(rightDeltaY, rightDeltaX) * (180 / Math.PI);

//       setLeftRotate(leftAngle - 180);
//       setRightRotate(rightAngle - 180);

//     });
//   });

//   return (
//     <>
//       <div className="relative flex flex-col gap-4 items-center justify-center text-black font-semibold h-screen py-20 bg-[#c14ba1]">

//         <div className="z-[1] flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
//           <div className='flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-white'>
//             <div className='second relative w-2/3 h-2/3 rounded-full bg-[#1b1b1b]'>

//               <div style={{ transform: `translate(-50%,-50%) rotate(${leftrotate}deg)` }} className='line absolute top-1/2 left-1/2 w-full h-5'>
//                 <div ref={leftEyeRef} className='w-5 h-5 rounded-full bg-white'></div>
//               </div>

//             </div>
//           </div>
//           <div className='flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-white'>
//             <div className='second relative w-2/3 h-2/3 rounded-full bg-[#1b1b1b]'>

//               <div style={{ transform: `translate(-50%,-50%) rotate(${rightrotate}deg)` }} className='line absolute top-1/2 left-1/2 w-full h-5'>
//                 <div ref={rightEyeRef} className='w-5 h-5 rounded-full bg-white'></div>
//               </div>

//             </div>
//           </div>
//         </div>

//         <div>
//           <FlipLink href="https://x.com/guri_who">Linkedin</FlipLink>
//         </div>
//         <div className='flex gap-20'>
//           <div>
//             <FlipLink href="https://x.com/guri_who">Github</FlipLink>
//           </div>
//           <div>
//             <FlipLink href="https://x.com/guri_who">Twitter</FlipLink>
//           </div>
//         </div>
//         <div>
//           <FlipLink href="https://x.com/guri_who">Facebook</FlipLink>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Contact

















// import { useState, useEffect, useRef } from 'react'
// import FlipLink from '@/Components/ui/text-effect-flipper'

// const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
// const lerp = (a, b, t) => a + (b - a) * t

// const Contact = () => {
//   const [rightrotate, setRightRotate] = useState(0)
//   const [leftrotate, setLeftRotate] = useState(0)

//   const leftEyeRef = useRef(null)   // ← keeps your existing rotation source (small white dot)
//   const rightEyeRef = useRef(null)

//   const leftSecondRef = useRef(null)  // ← new: inner dark div that will lazily follow
//   const rightSecondRef = useRef(null)

//   // target/current offsets for lazy follow
//   const leftTarget = useRef({ x: 0, y: 0 })
//   const rightTarget = useRef({ x: 0, y: 0 })
//   const leftCurrent = useRef({ x: 0, y: 0 })
//   const rightCurrent = useRef({ x: 0, y: 0 })

//   const rafRef = useRef(null)

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const mouseX = e.clientX
//       const mouseY = e.clientY

//       // --- rotation (unchanged) using your white-dot refs ---
//       if (leftEyeRef.current) {
//         const rect = leftEyeRef.current.getBoundingClientRect()
//         const cx = rect.left + rect.width / 2
//         const cy = rect.top + rect.height / 2
//         const dx = mouseX - cx
//         const dy = mouseY - cy
//         const angle = Math.atan2(dy, dx) * (180 / Math.PI)
//         setLeftRotate(angle - 180)
//       }

//       if (rightEyeRef.current) {
//         const rect = rightEyeRef.current.getBoundingClientRect()
//         const cx = rect.left + rect.width / 2
//         const cy = rect.top + rect.height / 2
//         const dx = mouseX - cx
//         const dy = mouseY - cy
//         const angle = Math.atan2(dy, dx) * (180 / Math.PI)
//         setRightRotate(angle - 180)
//       }

//       // --- lazy follow targets for the inner dark divs (.second) ---
//       // tweak multiplier and maxOffset for desired "strength"
//       const multiplier = 0.18

//       if (leftSecondRef.current) {
//         const rect = leftSecondRef.current.getBoundingClientRect()
//         const cx = rect.left + rect.width / 2
//         const cy = rect.top + rect.height / 2
//         let dx = mouseX - cx
//         let dy = mouseY - cy
//         const maxOffset = rect.width * 0.18
//         leftTarget.current.x = clamp(dx * multiplier, -maxOffset, maxOffset)
//         leftTarget.current.y = clamp(dy * multiplier, -maxOffset, maxOffset)
//       }

//       if (rightSecondRef.current) {
//         const rect = rightSecondRef.current.getBoundingClientRect()
//         const cx = rect.left + rect.width / 2
//         const cy = rect.top + rect.height / 2
//         let dx = mouseX - cx
//         let dy = mouseY - cy
//         const maxOffset = rect.width * 0.18
//         rightTarget.current.x = clamp(dx * multiplier, -maxOffset, maxOffset)
//         rightTarget.current.y = clamp(dy * multiplier, -maxOffset, maxOffset)
//       }

//       // kick off rAF loop if not already running
//       if (!rafRef.current) {
//         const animate = () => {
//           // ease amount: lower = lazier, higher = snappier
//           const ease = 0.12

//           // left
//           leftCurrent.current.x = lerp(leftCurrent.current.x, leftTarget.current.x, ease)
//           leftCurrent.current.y = lerp(leftCurrent.current.y, leftTarget.current.y, ease)
//           if (leftSecondRef.current) {
//             leftSecondRef.current.style.transform = `translate(${leftCurrent.current.x}px, ${leftCurrent.current.y}px)`
//           }

//           // right
//           rightCurrent.current.x = lerp(rightCurrent.current.x, rightTarget.current.x, ease)
//           rightCurrent.current.y = lerp(rightCurrent.current.y, rightTarget.current.y, ease)
//           if (rightSecondRef.current) {
//             rightSecondRef.current.style.transform = `translate(${rightCurrent.current.x}px, ${rightCurrent.current.y}px)`
//           }

//           rafRef.current = requestAnimationFrame(animate)
//         }

//         rafRef.current = requestAnimationFrame(animate)
//       }
//     }

//     window.addEventListener('mousemove', handleMouseMove)
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove)
//       if (rafRef.current) cancelAnimationFrame(rafRef.current)
//       rafRef.current = null
//     }
//   }, [])

//   return (
//     <>
//       <div className="relative flex flex-col gap-4 items-center justify-center text-black font-semibold h-screen py-20 bg-[#c14ba1]">

//         <div className="z-[1] flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
//           <div className='flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-white'>
//             {/* apply ref to this inner dark circle */}
//             <div ref={leftSecondRef} className='second relative w-2/3 h-2/3 rounded-full bg-[#1b1b1b]'>

//               <div style={{ transform: `translate(-50%,-50%) rotate(${leftrotate}deg)` }} className='line absolute top-1/2 left-1/2 w-full h-5'>
//                 <div ref={leftEyeRef} className='w-5 h-5 rounded-full bg-white'></div>
//               </div>

//             </div>
//           </div>
//           <div className='flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-white'>
//             <div ref={rightSecondRef} className='second relative w-2/3 h-2/3 rounded-full bg-[#1b1b1b]'>

//               <div style={{ transform: `translate(-50%,-50%) rotate(${rightrotate}deg)` }} className='line absolute top-1/2 left-1/2 w-full h-5'>
//                 <div ref={rightEyeRef} className='w-5 h-5 rounded-full bg-white'></div>
//               </div>

//             </div>
//           </div>
//         </div>

//         <div>
//           <FlipLink href="https://x.com/guri_who">Linkedin</FlipLink>
//         </div>
//         <div className='flex gap-20'>
//           <div>
//             <FlipLink href="https://x.com/guri_who">Github</FlipLink>
//           </div>
//           <div>
//             <FlipLink href="https://x.com/guri_who">Twitter</FlipLink>
//           </div>
//         </div>
//         <div>
//           <FlipLink href="https://x.com/guri_who">Facebook</FlipLink>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Contact


























import { useState, useEffect, useRef } from 'react';
import FlipLink from '@/Components/ui/text-effect-flipper';
import AnimatedText from '@/Components/AnimatedText';
import emailjs from "emailjs-com";
import { toast } from 'sonner';
import TransitionEffect from "@/Components/TransitionEffect";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cm36mfz",
        "template_bbfkn3w",
        form,
        "PYaRMGEqZQVd490Dc"
      )
      .then(
        () => {
          toast("Message sent successfully!");
          setForm({ name: "", number: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      );
  };


  const [leftRotate, setLeftRotate] = useState(0);
  const [rightRotate, setRightRotate] = useState(0);

  const [leftOffset, setLeftOffset] = useState({ x: 0, y: 0 });
  const [rightOffset, setRightOffset] = useState({ x: 0, y: 0 });

  const leftInnerRef = useRef(null);
  const rightInnerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (leftInnerRef.current) {
        const rect = leftInnerRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dx = mouseX - cx;
        const dy = mouseY - cy;

        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        setLeftRotate(angle - 180);

        const multiplier = 0.18;
        const maxOffset = rect.width * 0.18;
        const ox = Math.max(Math.min(dx * multiplier, maxOffset), -maxOffset);
        const oy = Math.max(Math.min(dy * multiplier, maxOffset), -maxOffset);
        setLeftOffset({ x: ox, y: oy });
      }

      if (rightInnerRef.current) {
        const rect = rightInnerRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dx = mouseX - cx;
        const dy = mouseY - cy;

        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        setRightRotate(angle - 180);

        const multiplier = 0.18;
        const maxOffset = rect.width * 0.18;
        const ox = Math.max(Math.min(dx * multiplier, maxOffset), -maxOffset);
        const oy = Math.max(Math.min(dy * multiplier, maxOffset), -maxOffset);
        setRightOffset({ x: ox, y: oy });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (

    <>
      <div className='relative'>
        <TransitionEffect />
      </div>
      <main className='flex w-full flex-col items-center justify-center'>
        <div className='w-full h-full inline-block z-0 lg:p-20 p-5 pt-10'>
          <AnimatedText text="Get In Touch" className='sm:mb-16 mb-10 md:!text-8xl sm:!text-7xl !text-5xl sm:text-left text-center tracking-tighter sm:mt-0 mt-20' />
          <h2 className='text-white/75 mt-4 mb-8'>Fill the form below : </h2>


          <form onSubmit={handleSubmit}>
            <p
              style={{
                fontFamily: '"Host Grotesk", sans-serif',
                lineHeight: 1.3,
              }}
              className="font-normal md:text-6xl sm:text-5xl text-3xl"
            >
              Hi! My name is{" "}
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={form.name}
                onChange={handleChange}
                className="border-b border-white/70 outline-none text-white/70 text-xl px-2 py-2 w-auto text-center placeholder:text-center"
                required
              />{" "}
              My contact number is{" "}
              <input
                type="number"
                name="number"
                placeholder="Enter your Number"
                value={form.number}
                onChange={handleChange}
                className="border-b border-white/70 outline-none text-white/70 text-xl px-2 py-2 w-auto text-center placeholder:text-center"
                required
              />{" "}
              and mail is{" "}
              <input
                type="email"
                name="email"
                placeholder="Enter your Mail"
                value={form.email}
                onChange={handleChange}
                className="border-b border-white/70 outline-none text-white/70 text-xl px-2 py-2 w-auto text-center placeholder:text-center"
                required
              />{" "}
              and my message is{" "}
              <input
                type="text"
                name="message"
                placeholder="Enter Message"
                value={form.message}
                onChange={handleChange}
                className="border-b border-white/70 outline-none text-white/70 text-xl px-2 py-2 w-auto text-center placeholder:text-center"
                required
              />{" "}
              .
            </p>

            <div className="flex items-center justify-end sm:mt-10 mt-16">
              <button
                type="submit"
                className="cursor-pointer hover:bg-black hover:text-white hover:border-white bg-white text-black border-2 border-transparent rounded-4xl sm:px-9 sm:py-3 px-7 py-2 font-semibold sm:text-xl text-lg"
              >
                Send Message
              </button>
            </div>
          </form>


        </div>
      </main>

      <div className="relative flex flex-col gap-4 items-center justify-center text-black font-semibold sm:h-screen sm:py-20 py-30 bg-[#c14ba1]">
        <div className="hidden z-[1] lg:flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">

          {/* LEFT EYE */}
          <div className="flex items-center justify-center w-[230.4px] h-[230.4px] rounded-full bg-white">
            <div
              ref={leftInnerRef}
              className="relative w-2/3 h-2/3 rounded-full bg-[#1b1b1b]"
              style={{
                transform: `translate(${leftOffset.x}px, ${leftOffset.y}px)`,
                transition: 'transform 90ms linear', // smooth small movement
              }}
            >
              <div
                style={{ transform: `translate(-50%,-50%) rotate(${leftRotate}deg)` }}
                className="line absolute top-1/2 left-1/2 w-1/2 h-5"
              >
                <div className="absolute right-0 w-5 h-5 rounded-full bg-white"></div>
              </div>
            </div>
          </div>

          {/* RIGHT EYE */}
          <div className="flex items-center justify-center w-[230.4px] h-[230.4px] rounded-full bg-white">
            <div
              ref={rightInnerRef}
              className="relative w-2/3 h-2/3 rounded-full bg-[#1b1b1b]"
              style={{
                transform: `translate(${rightOffset.x}px, ${rightOffset.y}px)`,
                transition: 'transform 90ms linear',
              }}
            >
              <div
                style={{ transform: `translate(-50%,-50%) rotate(${rightRotate}deg)` }}
                className="line absolute top-1/2 left-1/2 w-1/2 h-5"
              >
                <div className="absolute right-0 w-5 h-5 rounded-full bg-white"></div>
              </div>
            </div>
          </div>

        </div>

        {/* Links */}
        <div>
          <FlipLink href="https://www.linkedin.com/in/tanish-patel-99579b339/">Linkedin</FlipLink>
        </div>
        <div className="flex xl:flex-row flex-col xl:gap-20 sm:gap-0 gap-4 items-center justify-center">
          <FlipLink href="https://github.com/Tanish-source">Github</FlipLink>
          <FlipLink href="https://x.com/tanish__29">Twitter</FlipLink>
        </div>
        <div>
          <FlipLink href="https://www.facebook.com/gitaben.patel.18488">Facebook</FlipLink>
        </div>
      </div>

    </>
  );
};

export default Contact;