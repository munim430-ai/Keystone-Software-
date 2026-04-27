import { SceneShell, Sub } from "./SceneShell";

export default function MarketScene() {
  return (
    <SceneShell id="market" num="06" kicker="Market" align="right">
      <h2 className="display-2" style={{ maxWidth: "16ch" }}>Built for emerging markets.</h2>
      <Sub>Where complexity is high, and digital infrastructure is still being defined.</Sub>
    </SceneShell>
  );
}
