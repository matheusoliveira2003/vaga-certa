import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { SpotModule } from './spot/spot.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { ReceiptModule } from './receipt/receipt.module';

@Module({
  imports: [AuthModule, UserModule, EmployeeModule, SpotModule, VehicleModule, ReceiptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
