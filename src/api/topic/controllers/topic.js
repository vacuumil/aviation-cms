'use strict';

module.exports = {
  async find(ctx) {
    const topics = await strapi.entityService.findMany('api::topic.topic', {
      ...ctx.query,
      populate: ['section'],
      sort: 'order:asc',
    });
    return topics;
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const topic = await strapi.entityService.findOne('api::topic.topic', id, {
      ...ctx.query,
      populate: ['section'],
    });
    return topic;
  },
};