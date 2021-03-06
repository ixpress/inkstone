/*
 *  Copyright 2016 Shaunak Kishore (kshaunak "at" gmail.com),
 *                 Alex Zhai (alexlinzhai "at" gmail.com)
 *
 *  This file is part of Inkstone.
 *
 *  Inkstone is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  Inkstone is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with Inkstone.  If not, see <http://www.gnu.org/licenses/>.
 */

const fs = Npm.require('fs');

const asset = (path) => {
  const directory = 'cordova-build-override/www/assets';
  return `${process.env.PWD}/${directory}/${path}`;
}

Meteor.methods({
  readAsset: (path) => {
    return Meteor.wrapAsync(fs.readFile, fs)(asset(path), 'utf8');
  },
  removeAsset: (path) => {
    return Meteor.wrapAsync(fs.unlink, fs)(asset(path));
  },
  writeAsset: (path, data) => {
    return Meteor.wrapAsync(fs.writeFile, fs)(asset(path), data, 'utf8');
  },
});
