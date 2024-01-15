import { Suspense } from "react";
import { CModel } from "./CModel";
import { Html } from "@react-three/drei";
import Dialog from "./Dialog";

export const Scene = () => {
  return (
    <>
      <Suspense fallback={null}>
        <CModel />
      </Suspense>
      <Html>
        <Dialog />
      </Html>
    </>
  );
}
