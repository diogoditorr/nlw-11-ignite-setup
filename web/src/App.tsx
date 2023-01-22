import { Habbit } from "~/components/Habit";
import "~/styles/global.css";

function App() {
    return (
        <>
            <h1>Hello World</h1>
            <Habbit completedLevel={3} />
            <Habbit completedLevel={2} />
            <Habbit completedLevel={3} />
        </>
    );
}

export default App;
