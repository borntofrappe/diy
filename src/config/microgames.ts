import PokeTheLadybug from "../microgames/PokeTheLadybug.astro";
import PopTheBalloon from "../microgames/PopTheBalloon.astro";
import FindTheButterflies from "../microgames/FindTheButterflies.astro";
import CrackTheEgg from "../microgames/CrackTheEgg.astro";
import BattleTheEnemy from "../microgames/BattleTheEnemy.astro";
import SmashTheRabbits from "../microgames/SmashTheRabbits.astro";
import FightTheEnemy from "../microgames/FightTheEnemy.astro";
import TakeAPicture from "../microgames/TakeAPicture.astro";
import PickASide from "../microgames/PickASide.astro";
import MatchInPairs from "../microgames/MatchInPairs.astro";
import PickUpProduce from "../microgames/PickUpProduce.astro";
import KeepTheSecret from "../microgames/KeepTheSecret.astro";
import CatchTheFish from "../microgames/CatchTheFish.astro";
import TimeTheShots from "../microgames/TimeTheShots.astro";

export const microgames: Array<{
  Component: (_props: Record<string, any>) => any;
  backgroundColor: string;
  borderColor: string;
}> = [
  {
    Component: PokeTheLadybug,
    backgroundColor: "hsl(356 89 71)",
    borderColor: "hsl(153 24 77)",
  },
  {
    Component: PopTheBalloon,
    backgroundColor: "hsl(46 93 56)",
    borderColor: "hsl(41 100 47)",
  },
  {
    Component: FindTheButterflies,
    backgroundColor: "hsl(211 67 48)",
    borderColor: "hsl(172 76 41)",
  },
  {
    Component: CrackTheEgg,
    backgroundColor: "hsl(60 91 66)",
    borderColor: "hsl(171 83 39)",
  },
  {
    Component: BattleTheEnemy,
    backgroundColor: "hsl(119 30 49)",
    borderColor: "hsl(164 16 32)",
  },
  {
    Component: SmashTheRabbits,
    backgroundColor: "hsl(39 91 55)",
    borderColor: "hsl(143 99 32)",
  },
  {
    Component: FightTheEnemy,
    backgroundColor: "hsl(152 23 13)",
    borderColor: "hsl(40 25 42)",
  },
  {
    Component: TakeAPicture,
    backgroundColor: "hsl(120 1 84)",
    borderColor: "hsl(247 6 27)",
  },
  {
    Component: PickASide,
    backgroundColor: "hsl(36 93 56)",
    borderColor: "hsl(23 100 37)",
  },
  {
    Component: MatchInPairs,
    backgroundColor: "hsl(19 83 47)",
    borderColor: "hsl(142 100 31)",
  },
  {
    Component: PickUpProduce,
    backgroundColor: "hsl(30 95 72)",
    borderColor: "hsl(176 67 53)",
  },
  {
    Component: KeepTheSecret,
    backgroundColor: "hsl(0 0 0)",
    borderColor: "hsl(0 0 0)",
  },
  {
    Component: CatchTheFish,
    backgroundColor: "hsl(0 0 97)",
    borderColor: "hsl(210 100 35)",
  },
  {
    Component: TimeTheShots,
    backgroundColor: "hsl(209 61 16)",
    borderColor: "hsl(285 80 68)",
  },
];
