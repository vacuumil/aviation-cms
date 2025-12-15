'use strict';

module.exports = {
  async find(ctx) {
    const sections = await strapi.entityService.findMany('api::section.section', {
      ...ctx.query,
      populate: ['topics'],
      sort: 'order:asc',
    });
    return sections;
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const section = await strapi.entityService.findOne('api::section.section', id, {
      ...ctx.query,
      populate: ['topics'],
    });
    return section;
  },
};