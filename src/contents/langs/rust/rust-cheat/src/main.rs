use num::complex::Complex;

fn main() {
  // 基本类型
  // 整数 默认 i32
  // i8 i16 i32 i64 i128 isize
  // u8 816 u32 u64 u128 usize
  // 0b1101 0o007 0xFF
  let _i32: i32 = 9_005;
  let _u8 = b'A'; // 仅限于 u8

  // 浮点 默认 f64
  // f32 f64
  let mut x = 2.0;
  let x = (-42.0_f32).sqrt();
  if x.is_nan() {
    println!("未定义的数学行为")
  }

  // 复数 `use num::complex::Complex;`
  let a = Complex { re: 2.1, im: -1.2 };
  let b = Complex::new(11.1, 22.2);
  let result = a + b;
}
