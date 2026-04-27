import { SceneShell, Sub } from "./SceneShell";

export default function ProblemScene() {
  return (
    <SceneShell id="problem" num="02" kicker="The Problem" align="right">
      <h2 className="display-2" style={{ maxWidth: "16ch" }}>
        Systems break <br />before they scale.
      </h2>
      <Sub>Fragmented data, inefficient processes, and disconnected tools slow everything down.</Sub>
    </SceneShell>
  );
}
