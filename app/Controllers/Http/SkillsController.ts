import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Skill from 'App/Models/Skill'

export default class SkillsController {
  public async index() {
    const skills = await Skill.query()

    return {
      data: skills,
    }
  }

  public async show({ params }: HttpContextContract) {
    const skill = await Skill.findOrFail(params.id)

    return {
      data: skill,
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const skill = await Skill.create(body)

    response.status(201)

    return {
      message: 'Skill criada com sucesso!',
      data: skill,
    }
  }
}
