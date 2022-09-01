import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
  public async index() {
    const users = await User.query()

    return {
      data: users,
    }
  }

  public async show({ params }: HttpContextContract) {
    const pessoa = await User.findOrFail(params.id)

    return {
      data: pessoa,
    }
  }
}
