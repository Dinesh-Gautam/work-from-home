export function formatPhoneNumber(phoneNo: Number): String {
    const stringPhoneNo = phoneNo.toString();
    const half = Math.round(stringPhoneNo.length / 2)
    const splitPhoneNo = [stringPhoneNo.slice(0, half), stringPhoneNo.slice(half, stringPhoneNo.length)].join("-");
    return splitPhoneNo;
  }
