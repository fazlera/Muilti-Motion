import Book from "./Book/Book";
import Client from "./Client/Client";
import CounterUp from "./CountUp/CounterUp";
import Problem from "./Problem/Problem";
import Solution from "./Solution/Solution";
import Team from "./Team/Team";


const Home = () => {
    return (
        <div>
            <CounterUp/>
            <Problem/>
            <Solution/>
            <Team/>
            <Client/>
            <Book/>
        </div>
    );
};

export default Home;