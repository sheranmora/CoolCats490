import React from "react";
import { Route, Switch } from "react-router-dom";
//Pages and Sidebar
import GroupCreate from "../Components/groups/GroupCreate";
import GroupList from "../Components/groups/GroupList";
import GroupDetails from "./GroupDetails";
import GroupSideBar from "../Components/groups/GroupSideBar";
//Styling
import "./Groups.css";
import { Container } from "react-bootstrap";

const Groups = () => {
  return (
    <Container  className="wrapper bg-dark text-white fluid">
      <GroupSideBar></GroupSideBar>

      <Route path="/groups/create">
        <GroupCreate />
      </Route>

      <Route path="/groups/list">
        <GroupList />
      </Route>

      <Route path="/groups/group-details/:groupID" exact>
        <GroupDetails />
      </Route>
    </Container
>
  );
};

export default Groups;
