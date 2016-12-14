//
//  GwcScanManager.m
//  DayangH
//
//  Created by apple on 13/12/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "GwcScanManager.h"
#define ScreenWidth [UIScreen mainScreen].bounds.size.width
#define ScreenHeight [UIScreen mainScreen].bounds.size.height

@interface GwcScanManager () {
  //全局变量
  NSString *stringValue;
}


@end

@implementation GwcScanManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  //return [self setupCamera];
    UILabel * labIntroudction= [[UILabel alloc] initWithFrame:CGRectMake(15, 20, ScreenWidth -30, 50)];
    labIntroudction.backgroundColor = [UIColor clearColor];
    labIntroudction.numberOfLines=2;
    labIntroudction.textColor=[UIColor whiteColor];
    labIntroudction.text=@"将二维码图像置于矩形方框内，离手机摄像头10CM左右，系统会自动识别。";
    [self.view addSubview:labIntroudction];
    return self.view;
}

/*
- (UIView *)setupCamera
{
  // Device
  _device = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
  
  // Input
  _input = [AVCaptureDeviceInput deviceInputWithDevice:self.device error:nil];
  
  // Output
  _output = [[AVCaptureMetadataOutput alloc]init];
  [_output setMetadataObjectsDelegate:self queue:dispatch_get_main_queue()];
  
  // Session
  _session = [[AVCaptureSession alloc]init];
  [_session setSessionPreset:AVCaptureSessionPresetHigh];
  if ([_session canAddInput:self.input])
  {
    [_session addInput:self.input];
  }
  
  if ([_session canAddOutput:self.output])
  {
    [_session addOutput:self.output];
  }
  
  // 条码类型 AVMetadataObjectTypeQRCode
  _output.metadataObjectTypes =@[AVMetadataObjectTypeQRCode,AVMetadataObjectTypeCode39Code,AVMetadataObjectTypeCode128Code,AVMetadataObjectTypeCode39Mod43Code,AVMetadataObjectTypeEAN13Code,AVMetadataObjectTypeEAN8Code,AVMetadataObjectTypeCode93Code];
  
  // Preview
  _preview =[AVCaptureVideoPreviewLayer layerWithSession:self.session];
  _preview.videoGravity = AVLayerVideoGravityResizeAspectFill;
  _preview.frame =CGRectMake(20,70,ScreenWidth -40,ScreenHeight -140);
  [self.view.layer insertSublayer:self.preview atIndex:0];
  
  
  
  // Start
  [_session startRunning];
  return self.view;
}

#pragma mark AVCaptureMetadataOutputObjectsDelegate
- (void)captureOutput:(AVCaptureOutput *)captureOutput didOutputMetadataObjects:(NSArray *)metadataObjects fromConnection:(AVCaptureConnection *)connection
{
  if ([metadataObjects count] >0)
  {
    AVMetadataMachineReadableCodeObject * metadataObject = [metadataObjects objectAtIndex:0];
    stringValue = metadataObject.stringValue;
  }
  
  [_session stopRunning];

}

//- (NSDictionary *)constantsToExport {
//  return @{@"code":(self->stringValue)};
//}

RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback) {
  NSString *result = self->stringValue;
  if (result.length > 0) {
    callback(@[[NSNull null], result]);
  }
}
*/





@end
