'use strict';

const should = require('chai').should(),
  medal = require('../src/medal');

describe('Medal', function() {

  it('should solve to "Silver"', function() {
    medal(
        '00:30:00',
        '00:15:00',
        '00:45:00',
        '01:15:00'
      )
      .should
      .equal('Silver');
  });

  it('should solve to "None"', function() {
    medal(
        '01:15:00',
        '00:15:00',
        '00:45:00',
        '01:15:00'
      )
      .should
      .equal('None');
  });

  it('should solve to "Gold"', function() {
    medal(
        '00:00:01',
        '00:00:10',
        '00:01:40',
        '01:00:00'
      )
      .should
      .equal('Gold');
  });

  it('should solve to "Bronze"', function() {
    medal(
        '00:10:01',
        '00:00:10',
        '00:01:40',
        '01:00:00'
      )
      .should
      .equal('Bronze');
  });

  it('should solve to "Gold"', function() {
    medal(
        '00:00:01',
        '00:00:02',
        '00:00:03',
        '00:00:04'
      )
      .should
      .equal('Gold');
  });

  it('should solve to "None"', function() {
    medal(
        '90:00:01',
        '60:00:02',
        '70:00:03',
        '80:00:04'
      )
      .should
      .equal('None');
  });

  it('should solve to "Silver"', function() {
    medal(
        '03:15:00',
        '03:15:00',
        '03:15:01',
        '03:15:02'
      )
      .should
      .equal('Silver');
  });

  it('should solve to "Bronze"', function() {
    medal(
        '99:59:58',
        '99:59:57',
        '99:59:58',
        '99:59:59'
      )
      .should
      .equal('Bronze');
  });

  it('should solve to "Silver"', function() {
    medal(
        '01:23:45',
        '01:01:01',
        '02:02:02',
        '03:03:03'
      )
      .should
      .equal('Silver');
  });

  it('should solve to "Gold"', function() {
    medal(
        '14:49:03',
        '77:39:08',
        '92:11:36',
        '94:07:41'
      )
      .should
      .equal('Gold');
  });

  it('should solve to "Gold"', function() {
    medal(
        '61:01:40',
        '64:19:53',
        '79:30:02',
        '95:24:48'
      )
      .should
      .equal('Gold');
  });

});
