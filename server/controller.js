

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
            drop table if exists books;
            drop table if exists genres;

            create table genres (
                genre_id serial primary key, 
                name varchar
            );

            *****YOUR CODE HERE*****

            insert into genres (name)
            values ('Fantasy'),
            ('Horror'),
            ('Adventure'),
            ('Science Fiction'),
            ('Mystery'),
            ('Action'),
            ('Thriller'),
            ('Historical'),
            ('Romance');
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}