//
//  QRCodeView.h
//  DayangH
//
//  Created by apple on 20/12/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <AVFoundation/AVFoundation.h>
#import "QRCodeViewDelegate.h"
#import "RCTComponent.h"

@interface QRCodeView : UIView

@property(nonatomic ,weak)id<QRCodeViewDelegate>delegate;
@property (nonatomic, copy) RCTBubblingEventBlock onChange;

@end

