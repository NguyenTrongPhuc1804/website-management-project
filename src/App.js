import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Header from "./components/Home/Header/Header";
import Loading from "./components/GlobalSetting/Loading";
import Modal from "./HOC/ModalComponent/Modal";
import LoginTemplate from "./templates/HomeTemplate/LoginTemplate";
import LoginCyberBug from "./pages/Cyperbugs/LoginCyberBug/LoginCyberBug";
import LoginFormik from "./pages/Cyperbugs/LoginCyberBug/LoginCyberBug";
import JiraTemplate from "./templates/JiraTemplate/JiraTemplate";
import HomeJiraTemplate from "./templates/HomeTemplate/HomeJiraTemplate";
import CreateProject from "./pages/Cyperbugs/CreateProject/CreateProject";
import ManagerProject from "./pages/Cyperbugs/ManagerProject/ManagerProject";
import ModalJira from "./HOC/ModalComponent/JiraModal/ModalJira";
import IndexJira from "./pages/Cyperbugs/HomeJira/indexJira";
import SignUpJira from "./pages/Cyperbugs/SignUpJira/SignUpJira";
import DemoDragDrop from "./pages/Cyperbugs/demoDragDrop/DemoDragDrop";
import UserManagenet from "./pages/Cyperbugs/UserManagement/UserManagenet";

function App() {
  return (
    <div>
      <Loading />
      <Modal />
      <ModalJira />
      <Switch>
        {/* <Hometemplate exact path="/" Component={Home} /> */}
        <LoginTemplate exact path="/" Component={LoginCyberBug} />

        <HomeJiraTemplate
          exact
          path="/jiraTemplate/:projectId"
          Component={IndexJira}
        />

        <HomeJiraTemplate
          exact
          path="/createProject"
          Component={CreateProject}
        />
        <HomeJiraTemplate
          exact
          path="/managerProject"
          Component={ManagerProject}
        />
        <LoginTemplate exact path="/signUp" Component={SignUpJira} />
        <HomeJiraTemplate
          exact
          path="/userManagement"
          Component={UserManagenet}
        />

        {/* <HomeJiraTemplate exact path="/" Component={ManagerProject} /> */}

        {/* <Hometemplate exact path="*" Component={Home} /> */}
      </Switch>
    </div>
  );
}

export default App;
