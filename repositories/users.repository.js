const fs = require('fs');
const crypto = require('crypto');

class UsersRepository {
    constructor(filename) {
        if (!filename) throw new Error('Creating a repository requires a filename');

        this.filename = filename;

        try {
            fs.accessSync(this.filename);
        } catch (err) {
            fs.writeFileSync(this.filename, '[]');
        }
    }

    async getAll() {
       return  JSON.parse(
           await fs.promises.readFile(this.filename, {
               encoding: 'utf8'
           })
       );
    }

    async createRcord(attr) {
        attr.id = this.randomId();
        const records = await this.getAll();
        records.push(attr);
        await this.writeAll(records);
    }

    async writeAll(records) {
        await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2));
    }

    randomId() {
        return crypto.randomBytes(4).toString('hex');
    }

    async getRecord(id) {
        const records = await this.getAll();
        const user = records.find(record => record.id === id);
        if (!user) throw new Error('User Not Found');
        return user;
    }

    async deleteRecord(id) {
        const records = await this.getAll();
        const filteredRecords = records.filter(record => {
            if (!id) throw new Error('id Not Found');
            return record.id !== id
        });
        await this.writeAll(filteredRecords);
    }

    async deleteAll() {
        await this.writeAll([]);
    }
}



const test = async  () => {
    const repo = new UsersRepository("users.json");
}

test();

