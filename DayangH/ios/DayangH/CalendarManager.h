
#import "RCTBridgeModule.h" 
#import "RCTConvert.h"

typedef NS_ENUM(NSInteger, SEX)
{
  male,
  female,
};

@interface RCTConvert (classType)

@end

@interface CalendarManager : NSObject <RCTBridgeModule> 

@end
