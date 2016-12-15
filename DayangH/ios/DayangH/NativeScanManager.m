//
//  NativeScanManager.m
//  DayangH
//
//  Created by apple on 15/12/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "NativeScanManager.h"
#import "ZBarReaderView.h"

#define kMainScreenWidth [UIScreen mainScreen].bounds.size.width
#define kMainScreenHeight [UIScreen mainScreen].bounds.size.height

@interface NativeScanManager ()<ZBarReaderViewDelegate> {
  NSString *_resultCodeString;
}

@property(nonatomic, retain)ZBarReaderView *readerView;

@end

@implementation NativeScanManager

RCT_EXPORT_MODULE()


- (UIView *)view {
  return self.readerView;
}

- (ZBarReaderView *)readerView {
  if (_readerView == nil) {
    _readerView = [[ZBarReaderView alloc] init];
    _readerView.frame = CGRectMake(0.0f, 0.0f, kMainScreenWidth, kMainScreenHeight);
    _readerView.readerDelegate = self;
    _readerView.torchMode = 0;
    [_readerView start];
  }
  return _readerView;
}

#pragma mark ZBarReaderViewDelegate delegateMethod
- (void) readerView: (ZBarReaderView*) readerView
     didReadSymbols: (ZBarSymbolSet*) symbols
          fromImage: (UIImage*) image {
  NSString *scanString;
  for (ZBarSymbol *symbol in symbols)
  {
    NSLog(@"%@", symbol.data);
    scanString = symbol.data;
    //lab_ScanData.text = scanString;
    if (scanString.length>0) {
      _resultCodeString = scanString;
      NSLog(@"----_resultCodeString----:%@",_resultCodeString);
    }
    break;
  }
  [self.readerView stop];
  
}

@end
