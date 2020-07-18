const TABLES = require('../tables');

exports.seed = (knex) => knex(TABLES.WORKS).del()
  .then(() => knex(TABLES.WORKS).insert([
    {
      title: 'test1',
      workId: 'test-work-id-1',
      description: 'test-work-id-1',
      img: 'work-1.jpg',
      url: 'https://sample.com/',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia illo minus quo in, accusamus ipsam fugiat illum ad quisquam atque nihil rem aliquam exercitationem, culpa nobis quibusdam excepturi optio cumque eligendi voluptate vitae est ducimus! Aut omnis hic delectus minus nesciunt temporibus obcaecati culpa nostrum ad, animi necessitatibus nisi eaque.',
      createdAt: 1594439314,
      deletedAt: 0,
    },
    {
      title: 'test2',
      workId: 'test-work-id-2',
      description: 'test-work-id-2',
      img: 'work-2.jpg',
      url: 'https://sample.com/',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia illo minus quo in, accusamus ipsam fugiat illum ad quisquam atque nihil rem aliquam exercitationem, culpa nobis quibusdam excepturi optio cumque eligendi voluptate vitae est ducimus! Aut omnis hic delectus minus nesciunt temporibus obcaecati culpa nostrum ad, animi necessitatibus nisi eaque.',
      createdAt: 1594439314,
      deletedAt: 0,
    },
    {
      title: 'test3',
      workId: 'test-work-id-3',
      description: 'test-work-id-3',
      img: 'work-3.jpg',
      url: 'https://sample.com/',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia illo minus quo in, accusamus ipsam fugiat illum ad quisquam atque nihil rem aliquam exercitationem, culpa nobis quibusdam excepturi optio cumque eligendi voluptate vitae est ducimus! Aut omnis hic delectus minus nesciunt temporibus obcaecati culpa nostrum ad, animi necessitatibus nisi eaque.',
      createdAt: 1594439314,
      deletedAt: 0,
    },
  ]));
