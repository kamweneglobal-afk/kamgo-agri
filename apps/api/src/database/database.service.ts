import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(private readonly dataSource: DataSource) {}

  async health() {
    const result = await this.dataSource.query(
      'SELECT current_database() AS database, current_user AS user',
    );

    return {
      connected: true,
      database: result[0]?.database,
      user: result[0]?.user,
    };
  }
}
