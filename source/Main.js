import ReactDOM from "react-dom";
import DateFNS from "date-fns";
import React from "react";

import {
  insertStyles,
  update,
  navigate,
  normalizeEvent,
  at,
  array,
  style
} from "./Utils";
import { Nothing, Just } from "./Maybe";
import { compare } from "./Compare";
import { Equals } from "./Symbols";
import { Ok, Err } from "./Result";

import { Record, create } from "./Record";
import TestContext from "./TestContext";
import Component from "./Component";
import Provider from "./Provider";
import Program from "./Program";
import Decoder from "./Decoder";
import encode from "./Encoder";
import Module from "./Module";
import Store from "./Store";
import Enum from "./Enum";

import "./Ext";

export default {
  program: new Program(),

  normalizeEvent: normalizeEvent,
  insertStyles: insertStyles,
  navigate: navigate,
  compare: compare,
  update: update,
  encode: encode,
  array: array,
  style: style,
  at: at,

  ReactDOM: ReactDOM,
  React: React,

  TestContext: TestContext,
  Component: Component,
  Provider: Provider,
  Module: Module,
  Store: Store,

  Nothing: Nothing,
  Just: Just,

  Err: Err,
  Ok: Ok,

  Decoder: Decoder,
  DateFNS: DateFNS,
  Record: Record,
  Enum: Enum,

  createPortal: ReactDOM.createPortal,
  createElement: React.createElement,
  createRecord: create,

  Symbols: {
    Equals: Equals
  }
};
