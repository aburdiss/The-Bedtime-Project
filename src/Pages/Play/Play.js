import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";

import BlackJack from "./BlackJack/BlackJack";
import Breadcrumb from "../../Components/Structural/Breadcrumb/Breadcrumb";
import Crossword from "./Crossword/Crossword";
import LightsOut from "./LightsOut/LightsOut";
import PageTitle from "../../Components/Structural/PageTitle/PageTitle";
import PlayButton from "../../Components/Buttons/PlayButton/PlayButton";
import Playground from "./Playground/Playground";
import Sudoku from "./Sudoku/Sudoku";
import WordHunt from "./WordHunt/WordHunt";
import Waves from "../../Components/Background/Waves/Waves";

import "./Play.scss";

/**
 * @function Play
 * @description A navigational component that handles the switches for all of
 * the games on this stack.
 * @author Alexander Burdiss
 * @since 5/12/21
 * @version 1.1.1
 * @component
 * @example
 * ```jsx
 * <Play />
 * ```
 */
export default function Play() {
  return (
    <div>
      <Helmet>
        <title>Play | The Bedtime Project</title>
      </Helmet>
      <Switch>
        <Route exact path="/play">
          <Waves />
          <PageTitle>Play</PageTitle>
          <div className="Play-Links">
            {/* <PlayButton link="/play/blackjack">BlackJack</PlayButton> */}
            <PlayButton link="/play/playground">Playground</PlayButton>
            <PlayButton link="/play/lights-out">Lights Out</PlayButton>
            <PlayButton link="/play/sudoku">Sudoku</PlayButton>
            {/* <PlayButton link="/play/word-hunt">Word Hunt</PlayButton> */}
            <PlayButton link="/play/crossword">Crossword</PlayButton>
          </div>
        </Route>
        <Route path="/play/blackjack">
          <Waves />
          <Breadcrumb link="/play">Play</Breadcrumb>
          <BlackJack />
        </Route>
        <Route path="/play/playground">
          <Breadcrumb link="/play">Play</Breadcrumb>
          <Playground />
        </Route>
        <Route path="/play/lights-out">
          <Breadcrumb link="/play">Play</Breadcrumb>
          <LightsOut />
        </Route>
        <Route path="/play/sudoku">
          <Waves />
          <Breadcrumb link="/play">Play</Breadcrumb>
          <Sudoku />
        </Route>
        <Route path="/play/word-hunt">
          <Breadcrumb link="/play">Play</Breadcrumb>
          <WordHunt />
        </Route>
        <Route path="/play/crossword">
          <Waves />
          <Breadcrumb link="/play">Play</Breadcrumb>
          <Crossword />
        </Route>
      </Switch>
    </div>
  );
}
