import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { EmployeesModule } from "./modules/employees/employees.module";

@Module({
  imports: [
    EmployeesModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
