'use strict';

/**
 *
 * CodeMania is a game similar to CodeFights. You have to solve programming
 * tasks as quickly as possible. However, unlike CodeFights, CodeMania awards
 * you with a medal, depending on the time you took to solve the task.
 *
 * To get a medal, your time must be (strictly) inferior to the time
 * corresponding to the medal. You can be awarded "Gold", "Silver" or "Bronze"
 * medal, or "None" medal at all. Only one medal (the best achieved) is awarded.
 *
 * You are given the time achieved for the task and the time corresponding to
 * each medal. Your task is to return the awarded medal.
 *
 * Each time is given in the format HH:MM:SS.
 *
 * Example
 *
 * codemania_medal("00:30:00", "00:15:00", "00:45:00", "01:15:00") = "Silver"
 * codemania_medal("01:15:00", "00:15:00", "00:45:00", "01:15:00") = "None"
 * codemania_medal("00:00:01", "00:00:10", "00:01:40", "01:00:00") = "Gold"
 * codemania_medal("00:10:01", "00:00:10", "00:01:40", "01:00:00") = "Bronze"
 *
 * [input] string user_time
 * The time the user achieved.
 *
 * [input] string gold
 * The time corresponding to the gold medal.
 *
 * [input] string silver
 * The time corresponding to the silver medal.
 *
 * [input] string bronze
 * The time corresponding to the bronze medal.
 * It is guaranteed that gold < silver < bronze.
 *
 * [output] string
 * The medal awarded, one of for options: "Gold", "Silver", "Bronze" or "None".
 *
 */

module.exports = medal;

function medal(user_time, gold, silver, bronze) {

  let multiplier = [
    3600,
    60,
    1
  ], medals = [
    'Gold',
    'Silver',
    'Bronze',
    'None'
  ], index;

  let values = Object.keys(arguments).map((ind) => {
    return arguments[ind]
      .split(':')
      .map((x, i) => x * multiplier[i])
      .reduce((a, b) => a + b);
  });

  for(let i = 1; i < 5; i++){
    index = i-1;
    if(values[0] < values[i]) break;
  }

  return medals[index];

}
