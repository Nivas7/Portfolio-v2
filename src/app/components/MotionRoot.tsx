// components/MotionRoot.tsx
"use client";

import { AnimatePresence } from "framer-motion";
import PageWrapper from "./fm"; // your existing wrapper

export default function MotionRoot({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <PageWrapper>{children}</PageWrapper>
    </AnimatePresence>
  );
}

