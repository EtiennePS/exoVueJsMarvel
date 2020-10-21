import axios from "axios";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import VuexORMAxios from "@vuex-orm/plugin-axios";
import { Comic, Character, Creator, Event, Series, Story } from "@/models";

VuexORM.use(VuexORMAxios, { axios });

// Create a new instance of Database.
const database = new VuexORM.Database();

// Register Models to Database.
database.register(Comic);
database.register(Character);
database.register(Creator);
database.register(Event);
database.register(Series);
database.register(Story);

// Create Vuex Store and register database through Vuex ORM.
const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
});

export default store;
