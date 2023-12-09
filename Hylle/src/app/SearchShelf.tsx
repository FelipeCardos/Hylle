import { GradientView } from "./Components/Shelves/ShelvesStyles";
import SearchShelfPage from "./Components/Shelves/SearchShelfPage";
import { NativeBaseProvider } from "native-base";

export default function SearchShelf() {
    return (
        <GradientView colors={["#3684B2", "#05486e"]}>
            <NativeBaseProvider>
                <SearchShelfPage />
            </NativeBaseProvider>
        </GradientView>
    )
}