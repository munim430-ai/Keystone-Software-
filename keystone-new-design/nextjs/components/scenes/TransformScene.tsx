import { SceneShell, Sub } from "./SceneShell";

export default function TransformScene() {
  return (
    <SceneShell id="transform" num="03" kicker="The Shift" align="left">
      <h2 className="display-2" style={{ maxWidth: "16ch" }}>
        Structure is a <span className="accent-word">decision</span>.
      </h2>
      <Sub>With the right systems, complexity becomes control.</Sub>
    </SceneShell>
  );
}
