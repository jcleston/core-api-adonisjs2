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
    const user = await User.findOrFail(params.id)

    return {
      data: user,
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const user = await User.create(body)

    response.status(201)

    return {
      message: 'User criado com sucesso!',
      data: user,
    }
  }
}
