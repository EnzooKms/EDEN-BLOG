import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'
import { string } from '@ioc:Adonis/Core/Helpers'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Post.createMany([
      {
        title: 'adonis 1',
        description: 'AdonisJS is a backend framework for Node.js. The framework is written in TypeScript, and the application you will create using AdonisJS is also going to be in TypeScript.',
        thumbnail: string.generateRandom(32) + '.' + 'png',
        username: 1
      },
      {
        title: 'adonis 2',
        description: 'AdonisJS is a backend framework for Node.js. The framework is written in TypeScript, and the application you will create using AdonisJS is also going to be in TypeScript.',
        thumbnail: string.generateRandom(32) + '.' + 'png',
        username: 1
      },
      {
        title: 'adonis 3',
        description: 'AdonisJS is a backend framework for Node.js. The framework is written in TypeScript, and the application you will create using AdonisJS is also going to be in TypeScript.',
        thumbnail: string.generateRandom(32) + '.' + 'png',
        username: 2
      },
      {
        title: 'adonis 4',
        description: 'AdonisJS is a backend framework for Node.js. The framework is written in TypeScript, and the application you will create using AdonisJS is also going to be in TypeScript.',
        thumbnail: string.generateRandom(32) + '.' + 'png',
        username: 2
      },
    ])
  }
}
