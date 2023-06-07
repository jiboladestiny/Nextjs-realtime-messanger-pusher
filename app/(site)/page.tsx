'use client'
import Image from "next/image";
import logo from "../../public/images/icons8-chat.svg";
import AuthForm from "./components/AuthForm";

import { useRef, useEffect } from "react";

export default function Home() {
  const vidRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.play();
    }
  }, []);

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 overlay overflow-hidden">
      <video
        src="https://res.cloudinary.com/destiny1233/video/upload/v1686067248/pexels-taryn-elliott-5665074-1920x1080-25fps_q2rgks.mp4"
        className="back-video"
        ref={vidRef}
        muted
        autoPlay
        loop
      />
      <div className="mx-auto sm:w-full w-11/12">
        <Image alt="logo" height={48} width={48} className="mx-auto w-auto" src={logo} />
        <i className='bx bxs-message-dots'></i>
        <h2 className="mt-6 text-center text-2xl sm:text-3xl font-bold tracking-light text-white">Sign in to your account</h2>
      </div>
      <AuthForm />
    </div>
  );
}
