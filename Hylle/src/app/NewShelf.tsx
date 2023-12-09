import CreateShelf from "./Components/Shelves/CreateShelf";
import {GradientView} from "./Components/Shelves/ShelvesStyles";


export default function NewShelf() {
    return (
      <GradientView colors={["#3684B2","#05486e"]} className="flex-1 items-center justify-center">
        <CreateShelf />
      </GradientView>
    );
  }