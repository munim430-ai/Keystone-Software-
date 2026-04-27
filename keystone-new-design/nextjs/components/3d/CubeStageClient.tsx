"use client";

import dynamic from "next/dynamic";

const CubeStage = dynamic(() => import("@/components/3d/CubeStage"), { ssr: false });

export default function CubeStageClient() {
  return <CubeStage />;
}
