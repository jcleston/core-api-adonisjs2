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

  public async destroy({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    await user.delete()

    return {
      message: 'User excluído com sucesso!',
      data: user,
    }
  }

  public async update({ params, request }: HttpContextContract) {
    const body = request.body()

    const user = await User.findOrFail(params.id)

    user.email = body.email
    user.password = body.password

    await user.save()

    return {
      message: 'User atualizado com sucesso!',
      data: user,
    }
  }
}
