import { SceneShell, Sub } from "./SceneShell";

export default function OriginScene() {
  return (
    <SceneShell id="origin" num="08" kicker="Origin" align="right">
      <h2 className="display-2" style={{ maxWidth: "16ch" }}>
        Built close to <br />the problem.
      </h2>
      <Sub>
        Keystone is shaped by real-world challenges, practical execution, and the belief that ambitious systems should
        actually work.
      </Sub>
    </SceneShell>
  );
}
