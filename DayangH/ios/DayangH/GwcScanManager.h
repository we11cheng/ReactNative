//
//  GwcScanManager.h
//  DayangH
//
//  Created by apple on 13/12/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RCTViewManager.h"
#import <AVFoundation/AVFoundation.h>

@interface GwcScanManager : RCTViewManager<AVCaptureMetadataOutputObjectsDelegate>

@property (strong, nonatomic) AVCaptureDevice * device;
@property (strong, nonatomic) AVCaptureDeviceInput * input;
@property (strong, nonatomic) AVCaptureMetadataOutput * output;
@property (strong, nonatomic) AVCaptureSession * session;
@property (strong, nonatomic) AVCaptureVideoPreviewLayer * preview;

@end
