import { AppController } from './app.controller';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { TarefaModule } from './tarefa/tarefa.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarefa } from './tarefa/entities/tarefa.entity';

@Module({
  imports: [
    /*TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', 
      password: 'root',
      database: 'db_todolist',
      entities: [ Tarefa, Categoria ],
      synchronize: true,
    }),*/
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      logging: false,
      dropSchema: false,
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: true,
      autoLoadEntities: true,
    }),
    TarefaModule,
    CategoriaModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}


