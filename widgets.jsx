import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import Weather from './weather';
import ClockWidget from './clock_widget'
import AutoComplete from './autocomplete'



document.addEventListener("DOMContentLoaded", e => {
  let title = ["cheesecake", "tiramisu", "real chia pudding"];
  let content = ["this is cheesy", "this is miso", "this is pudding"];
  let names = ["aba", "bcd", "csdf"];
  let allHash = [];

  for (let i = 0; i <title.length; i++) {
    let hash = {};
    hash["title"] = title[i];
    hash["content"] = content[i];
    allHash.push(hash);
  }

  let tabs = <Tabs data={allHash}/>;
  let weather = <Weather/>;
  let clock = <ClockWidget/>;
  let autocomplete = <AutoComplete names={names}/>;
  const root = document.getElementById("root");
  ReactDOM.render(Widgets(tabs, autocomplete,clock), root);
});

const Widgets = (tabs, autocomplete, clock) => <div>{tabs}{clock}{autocomplete}</div>;
