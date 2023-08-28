import React from "react";
import { Title } from "./components/Title";
import { RecipeForm } from "./components/RecipeForm";
import { RecipeList } from "./components/RecipeList";
interface AppProps {
  name: string;
}

const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <div className="title">
      <Title
        title="Recipe Book"
        subtitle="A simple recipe book built with Phoenix LiveView and React"
      />
      <div className="flex">
        <RecipeForm />
        <RecipeList />
      </div>
    </div>
  );
};
export default App;
