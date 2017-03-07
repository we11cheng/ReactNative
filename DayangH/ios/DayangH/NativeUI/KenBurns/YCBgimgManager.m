//
//  YCBgimgManager.m
//  DayangH
//
//  Created by gwc on 07/03/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "YCBgimgManager.h"
#import "JBKenBurnsView.h"

@interface YCBgimgManager ()<KenBurnsViewDelegate>

@end

@implementation YCBgimgManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  NSArray *myImages = @[[UIImage imageNamed:@"image0.jpg"],
                        [UIImage imageNamed:@"image1.jpeg"],
                        [UIImage imageNamed:@"image2.jpeg"],
                        [UIImage imageNamed:@"image3.jpeg"],
                        [UIImage imageNamed:@"image4.png"],
                        [UIImage imageNamed:@"image5.png"]];
  JBKenBurnsView *burnView = [[JBKenBurnsView alloc] init];
  burnView.delegate = self;
  [burnView animateWithImages:myImages transitionDuration:6 initialDelay:0 loop:YES isLandscape:YES];
  return burnView;
  
}

- (void)kenBurns:(JBKenBurnsView *)kenBurns didShowImage:(UIImage *)image atIndex:(NSUInteger)index {
  NSLog(@"didShowImage");
}
- (void)kenBurns:(JBKenBurnsView *)kenBurns didFinishAllImages:(NSArray *)images {
  NSLog(@"didFinishAllImages");
}

@end
