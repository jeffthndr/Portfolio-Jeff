"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre mi");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mi</SectionHeading>
      <p className="mb-3">
        Luego de graduarme en el año 2021{" "}
        <span className="font-medium">como ingeniero de sistemas</span>, decidi ir por la rama del analisis de datos; sin embargo,
        con el tiempo me fui dando cuenta que me gustaba mucho crear webs, por lo que decidí estudiar un bootcamp, el cual me ayudó a reforzar mis conocimientos. Aqui
        obtuve mi certificado de {" "}<span className="font-medium">full-stack web development</span> en el año 2023{" "}. 
        {" "}Gracias al bootcamp aprendí mas sobre{" "}
        <span className="font-medium">
          React, Vue.js, Node.js, y MongoDB
        </span>
        . Tambien conozco un poco de TypeScript y hasta el día de hoy sigo aprendiendo mas lenguajes{" "}

      </p>

      <p>
        <span className="italic">Cuando no programo</span>, me gusta jugar videojuegos o al futbol con los amigos. 
        Tambien me encanta{" "}
        <span className="font-medium">aprender nuevas cosas sobre el diseño web</span>. Actualmente estoy aprendiendo sobre {""} 
        <span className="font-medium">Next.js{" "}</span>
      </p>
    </motion.section>
  );
}
