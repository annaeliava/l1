import { wordEndings } from "./endings.js";

wordEndings(112, ["сообщение", "сообщения", "сообщений"]); // 112 сообщений
wordEndings(12, ["сообщение", "сообщения", "сообщений"]); // 12 сообщений
wordEndings(1, ["сообщение", "сообщения", "сообщений"]); // 1 сообщение
wordEndings(1024,["пользователь", "пользователя", "пользователей"]); // 1024 пользователя
wordEndings(1026,["пользователь", "пользователя", "пользователей"]); // 1026 пользователя
wordEndings(121,["пользователь", "пользователя", "пользователей"]); // 121 пользователь
wordEndings(2, ["сообщение", "сообщения", "сообщений"]); // 2 сообщения