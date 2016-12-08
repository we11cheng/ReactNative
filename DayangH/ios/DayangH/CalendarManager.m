#import "CalendarManager.h" 
#import "RCTLog.h" 




@implementation RCTConvert (classType)

RCT_ENUM_CONVERTER(SEX,(@{@"male":@(male),@"female":@(female)}),male,integerValue);


@end

@implementation CalendarManager 

RCT_EXPORT_MODULE(); 
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location) { 
    RCTLogInfo(@"Pretending to create an event %@ at %@", name, location); 
};
RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  NSArray *events = @[@"gwc",@"gwc2"];
  callback(@[[NSNull null], events]);
}
- (NSDictionary *)constantsToExport
{
  return @{ @"male": @(male),@"female":@(female)};
};

@end
