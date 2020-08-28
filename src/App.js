import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, NavLink, useParams} from 'react-router-dom';

export default function App(){
  return (
    <BrowserRouter>
      <div>
          <h1>React Router DOM example</h1>
          <ul>
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/topics">Topics</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/topics">
                <Topics/>
              </Route>
              <Route path="/contact">
                <Contact/>
              </Route>
              <Route path="/">
                Not found
              </Route>
          </Switch>
      </div>
    </BrowserRouter>
  )
}


var contents = [
  {id:1, title:'HTML', description:'HTML is ...'},
  {id:2, title:'JS', description:'JS is ...'},
  {id:3, title:'React', description:'React is ...'}
]

function Topic(){
    var params = useParams();
    var topic_id = params.topic_id;
    var selected_topic = {
        title:'Sorry',
        description:'Not Found'    
    }
    for(var i=0; i<contents.length; i++){
        if(contents[i].id === Number(topic_id)){
            selected_topic = contents[i];
            break;
        }
    }
    return (
        <div>
            <h3>{selected_topic.title}</h3>
            {selected_topic.description}
        </div>
    );
}

function Topics(){
    var lis = [];
    for(var i=0; i<contents.length; i++){
        lis.push(<li key={contents[i].id}><NavLink to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>)
    }
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                {lis}
            </ul>
            <Route path="/topics/:topic_id">
                <Topic></Topic>
            </Route>
        </div>
    )
}

function Home(){
  return (
      <div>
          <h2>Home</h2>
          Home...
      </div>
  )
}

function Contact(){
    return (
        <div>
            <h2>Contact</h2>
            Contact...
        </div>
    )
}

