GDPC                                                                                  res://Camera.gd.remap   p7      !       ��g,;��=�U���   res://Camera.gdc@            �"a�H�j�LWH�D�   res://Camera.tscn   P      $      �#P+���ԫ=m�s   res://Game.tscn �      x      9��r'iV���Vϸk   res://Object.gd.remap   �7      !       ڠ�s�St��kY480�   res://Object.gdc             ��6�!w�&W�9��}�   res://PersistObject.tscn       �       �����H�:0�dOb   res://Player.gd.remap   �7      !       ��0�F �qq��dX��   res://Player.gdc�      �      � �ϰ �'ڨ�Z�Y   res://Player.tscn   �      �      ׮�&�1`�2�<�F�   res://Room.gd.remap  8             317�9�&iZ�(����   res://Room.gdc  `      �      a+(_��J���C\   res://Room.tscn �      U      /h��sg�R�/�fћ*   res://Socket.tscn   P       "      M�϶�0�"/�:O�Q   res://default_env.tres  �!      �       um�`�N��<*ỳ�8   res://handler.gd.remap   8      "       �4y��TT�aMb�   res://handler.gdc   0"      ;      ��\���o���l
/Ԏ    res://objects_handler.gd.remap  P8      *       /���}S�w�zf|!+   res://objects_handler.gdc   p#      p      A�fv�h��B8��ԑ   res://project.binary�8      �      o�[����/y�G�b   res://socket.gd.remap   �8      !       h�F*#v����4_�Y   res://socket.gdc�*      �      ��E#X�eZ��b�6&�    GDSC         '   u     ������ڶ   ������������������ض   �������Ѷ���   ������������   ������������   ���������������������������   �������Ŷ���   �����׶�   ����¶��   ����������������������Ҷ   ����������������Ҷ��   �������������ض�   �����������¶���   �����������������ض�   ���������Ӷ�   ζ��   ����������ض   �����Ӷ�   ���������Ӷ�   ϶��   ���������������������ڶ�   �����¶�   ����¶��   ���������¶�   �ٶ�   �����׶�   ����������ض   ̶��   ����������ٶ          
                     rotate        pan         �������?         {�G�z�?      zoom_in       zoom_out                         	                           	   &   
   '      2      B      F      V      \      i      v            �      �      �      �      �      �      �      �      �      �      �      �      �       �   !     "     #   7  $   E  %   \  &   s  '   3YYY;�  V�  Y;�  V�  YY:�  V�  �  Y:�  V�  �  Y:�  V�  �  YY0�  P�  V�  QX=V�  &�  T�	  P�  Q�  T�	  P�  QV�  �  �  &�  T�
  P�  Q�  T�
  P�  QV�  &�  �  V�  ;�  V�  �  PQT�  PQ�  ;�  V�  �  T�  �  T�  �  &�  P�  Q�  V�  ;�  V�  �  P�  Q�  &�  T�
  P�  QV�  �  �  P�  P�  R�  R�  QR�  �	  Q�  (V�  ;�  V�  �  T�  �  T�  �  �  P�  P�  R�  R�  Q�	  Q�  �  �  PQT�  PQ�  �  �  YYY0�  P�  V�  QX=V�  &�  T�
  P�
  Q�  T�
  P�  QV�  ;�  V�  �  P�  R�  R�  Q�  &�  T�
  P�  QV�  W�  T�  T�  �#  PW�  T�  T�  R�  T�  R�  Q�  W�  T�  T�  �#  PW�  T�  T�  R�  T�  R�  Q�  'W�  T�  T�  P�  Q�  V�  W�  T�  T�  �#  PW�  T�  T�  R�  T�  R�  Q�  W�  T�  T�  �#  PW�  T�  T�  R�  T�  R�  QY`     [gd_scene load_steps=2 format=2]

[ext_resource path="res://Camera.gd" type="Script" id=1]

[node name="Camera" type="Spatial"]
script = ExtResource( 1 )

[node name="Camera" type="Camera" parent="."]
transform = Transform( 1, 0, 0, 0, 0.707107, 0.707107, 0, -0.707107, 0.707107, 0, 10, 10 )
            [gd_scene load_steps=3 format=2]

[ext_resource path="res://Camera.tscn" type="PackedScene" id=3]

[sub_resource type="Animation" id=1]
resource_name = "New Anim"
length = 3.0
loop = true

[node name="Game" type="Spatial"]

[node name="AnimationPlayer" type="AnimationPlayer" parent="."]
autoplay = "New Anim"
playback_process_mode = 0
"anims/New Anim" = SubResource( 1 )

[node name="Camera" parent="." instance=ExtResource( 3 )]

[node name="DirectionalLight" type="DirectionalLight" parent="."]
transform = Transform( 1, 0, 0, 0, 0.707107, 0.707107, 0, -0.707107, 0.707107, 0, 0, 0 )
light_energy = 0.1

[editable path="Camera"]
        GDSC             $      ������ڶ   ������������¶��   �Ҷ�   �����϶�                                                    	      
                                                    !      "      3Y2�  YY;�  V�  YYYYYYYYY0�  PQX=V�  -YYYYYY` [gd_scene load_steps=2 format=2]

[ext_resource path="res://Object.gd" type="Script" id=1]

[node name="PersistObject" type="Spatial"]
script = ExtResource( 1 )
               GDSC       
   *   �      ������������¶��   �������Ѷ���   ������������   ����򶶶   �����¶�   ��������ض��   ����������Ķ   ���϶���   ������������϶��   ����嶶�   ����¶��   ����ж��   �����϶�   ��������ڶ��   ����������ض   ���������������Ŷ���   ����׶��   ����������ٶ   �������������Ӷ�   ���������¶�   ������Ӷ   �����������ٶ���   ���������Ҷ�   �������������������¶���   �����׶�   ���Ӷ���   ����¶��   ���������¶�   �������������ض�   �����������ڶ���   ��������ζ��   ����������������Ҷ��          
                   
   set_target     
   position_x     
   position_y    �������?      interact                         
                              (   	   6   
   7      <      =      B      K      M      N      T      Y      ]      ^      _      g      n      o      p      {      �      �      �      �      �       �   !   �   "   �   #   �   $   �   %   �   &   �   '   �   (   �   )   �   *   3YY;�  V�  Y:�  �  Y:�  �  YY;�  V�  Y;�  V�  �  P�  R�  R�  QY;�  V�  �  P�  R�  R�  QYY;�  V�  YY:�	  N�  �  VL�  R�  MRYOYY0�
  PQV�  ;�  �  �  �  YYY0�  PQX=V�  �  �  P�  QYYY0�  P�  V�  QX=V�  &�  T�  P�  Q	�  V�  �  T�  P�  QYYY0�  P�  V�  QX=V�  �  &�  �  �  �  V�  �  �  P�  L�  MR�  R�  L�  MQ�  �  �  T�  P�  Q�  �  �  T�  PQ�  YYY0�  P�  V�  R�  V�  R�  V�  R�  V�  R�  V�  QX=V�  &�  T�  P�  QV�  �  �	  Y` [gd_scene load_steps=6 format=2]

[ext_resource path="res://Player.gd" type="Script" id=1]

[sub_resource type="SphereMesh" id=4]

[sub_resource type="SpatialMaterial" id=5]
params_diffuse_mode = 4
params_specular_mode = 3
albedo_color = Color( 0.603922, 0.843137, 1, 1 )
roughness = 0.0

[sub_resource type="BoxShape" id=2]

[sub_resource type="BoxShape" id=3]

[node name="Player" type="KinematicBody"]
collision_layer = 0
collision_mask = 0
script = ExtResource( 1 )

[node name="MeshInstance" type="MeshInstance" parent="."]
mesh = SubResource( 4 )
material/0 = SubResource( 5 )

[node name="Area" type="Area" parent="."]

[node name="CollisionShape" type="CollisionShape" parent="Area"]
shape = SubResource( 2 )

[node name="CollisionShape" type="CollisionShape" parent="."]
shape = SubResource( 3 )
disabled = true
[connection signal="input_event" from="Area" to="." method="_on_Area_input_event"]
        GDSC         	   R      ������ڶ   ������������Ҷ��   �������������ض�   �������������������¶���   �����׶�   ���Ӷ���   ����¶��   ���������¶�   �����������ڶ���   ��������ζ��   �����������������Ҷ�   ������Ӷ   ζ��   ̶��   �����¶�   �����������Ӷ���      interact      channel       room      type   
   set_target     
   position_x     
   position_y                     	      
      %      .      I      P   	   3YYB�  P�  QYY0�  P�  V�  R�  V�  R�  V�  R�  V�  R�	  V�  QX=V�  &�  T�
  PQV�  ;�  V�  N�  V�  R�  V�  R�  V�  T�  R�  V�  T�  O�  �  T�  P�  QY`           [gd_scene load_steps=4 format=2]

[ext_resource path="res://Room.gd" type="Script" id=1]

[sub_resource type="PlaneMesh" id=1]
size = Vector2( 8, 8 )

[sub_resource type="BoxShape" id=2]
extents = Vector3( 4, 0.1, 4 )

[node name="Room" type="Spatial"]
script = ExtResource( 1 )

[node name="MeshInstance" type="MeshInstance" parent="."]
mesh = SubResource( 1 )
material/0 = null

[node name="Area" type="Area" parent="."]

[node name="CollisionShape" type="CollisionShape" parent="Area"]
shape = SubResource( 2 )
[connection signal="input_event" from="Area" to="." method="_on_Area_input_event"]
           [gd_scene load_steps=2 format=2]

[ext_resource path="res://socket.gd" type="Script" id=1]

[node name="Socket" type="Node"]
script = ExtResource( 1 )

[node name="Timer" type="Timer" parent="."]
autostart = true
[connection signal="timeout" from="Timer" to="." method="_on_Timer_timeout"]
              [gd_resource type="Environment" load_steps=2 format=2]

[sub_resource type="ProceduralSky" id=1]

[resource]
background_mode = 2
background_sky = SubResource( 1 )
             GDSC            -      ������ڶ   ������Ķ   �������Ķ���   ������Ӷ   ���ڶ���      method                                       	      
         	      
               '      (      )      *      +      3Y2�  YYYYYYYY0�  P�  V�  QX=V�  &�  V�  �  P�  LMR�  QYYYYY`     GDSC         >   F     ������Ķ   �����������   ����嶶�   ������Ŷ   �����϶�   �������Ķ���   ������Ӷ   ���ڶ���   �����������������¶�   ���������޶�   �����Ŷ�   �����������������¶�   ���Ӷ���   �������Ӷ���   �������Ӷ���   ��������Ҷ��   ��������������������¶��   ���������Ӷ�   ����Ӷ��   ��������������������¶��   �����¶�   ������������¶��             res://Room.tscn             res://Player.tscn         add_persist_object        scene_id      position      rotation      remove_persist_object         id        modify_persist_object         type   	   parent_id      
   /root/Game        removing object       method                           	                           	      
         &      -      3      5      6      >      ?      @      A      I      K      L      M      X      Y      _      h      r      s      t      u       �   !   �   "   �   #   �   $   �   %   �   &   �   '   �   (   �   )   �   *   �   +   �   ,   �   -   �   .   �   /   �   0   �   1   �   2   �   3   �   4   �   5   �   6      7     8     9     :   '  ;   -  <   8  =   D  >   3YYY:�  N�  V�  R�  �  V�  YOYYY:�  N�  �  VL�  R�  R�  MR�  �  VL�	  MR�  �
  VL�	  MYOYY;�  V�  NOYYYY0�  PQX=V�  -YYY0�  P�  V�  QX=V�  �  &�  �  V�  &�  L�  M�  V�  �  P�  L�  MR�  Q�  YYY0�  P�  V�  QX=V�  �  �  �  �  �  ;�	  V�  �  T�
  PQL�  L�  MM�  ;�  V�  �L  P�	  QT�  PQ�  &�  L�  M�  V�  �  P�  QT�  P�  Q�  (V�  �  �  �  P�  QT�  P�  Q�  �  L�  L�	  MM�  YYY0�  P�  V�  QX=V�  �?  P�  �  L�	  MQ�  �  L�  L�	  MMT�  PQ�  �  T�  P�  L�	  MQYYY0�  P�  V�  QX=V�  &�	  �  V�  &�  L�	  M�  V�  ;�  V�  �  L�  L�	  MM�  &�  �  V�  &�  L�  M�  T�  V�  �  T�  P�  L�  MR�  QY`GDSC   /      G   �     ���Ӷ���   ��������¶��   ��������������¶   ����   �������Ŷ���   �������������Ķ�   ������Ҷ   �����϶�   ������¶   ���������������������Ҷ�   �������������ڶ�   �������Ŷ���   ����׶��   ��������������������Ŷ��   ��������������������񶶶   �������������������򶶶�   ���ڶ���   �����������Ӷ���   ������Ӷ   �����������ض���   ��������   �������Ķ���   ���������¶�   �����Ў�   �������������������������Ҷ�   ��������ڶ��   �������������Ӷ�   ������������Ķ��   ���������������   �������������������Ķ���   ��������������������Ҷ��   �����������������������Ҷ���    ����������������������������Ķ��   �������������Ѷ�   ���������¶�   ������������������Ў����   ����Ӷ��   ���������¶�   �������Ķ���   ����������������¶��   ���������¶�   ���ڶ���   �����������ݶ���   ����Ҷ��   �������Ӷ���   �����������ض���   ���������Ӷ�      room          +   Trying to establish a websocket connection.       connection_established        _on_connection_established        connection_error      _on_connection_error      connection_failed         _on_connection_failed         connection_succeeded      _on_connection_succeeded      data_received         _on_received_data_from_server               wss://websocket.slumberparty.io             Connection established.       Connection error.         Connection failed.        Connection succeeded.         channel       Godot sees the room    !   sessionStorage.getItem("room_id")          
   /root/Game        settings      type   
   enter_room        room_id    	   as_player                                                       	      
   #      $      %      -      2      =      H      S      ^      i      p      w      x      y      �      �      �      �      �      �      �      �       �   !   �   "   �   #   �   $   �   %   �   &   �   '   �   (   �   )   �   *   �   +     ,     -     .   	  /     0     1     2     3      4   !  5   5  6   E  7   J  8   P  9   Y  :   f  ;   g  <   h  =   p  >   q  ?   �  @   �  A   �  B   �  C   �  D   �  E   �  F   �  G   3YYY;�  V�  �  T�  PQYY;�  N�  V�  YOYY;�  V�  �  YYY0�  PQX=V�  �?  P�  Q�  �  T�  P�  RR�  Q�  �  T�  P�  RR�  Q�  �  T�  P�  RR�  Q�  �  T�  P�	  RR�
  Q�  �  T�  P�  RR�  Q�  �  T�	  P�  Q�  �  T�
  P�  QYYY0�  P�  V�  QX=V�  &�  T�  PQ�  T�  �  T�  PQ�  T�  V�  �  T�  PQYYY0�  P�  V�  QX=V�  ;�  V�  �  T�?  P�  Q�  �  T�  P�  QT�  P�  T�  PQQYYY0�  P�  V�  QX=V�  �?  P�  Q�  �  T�  P�  QT�  P�  T�  QYYY0�  PQX=V�  �?  P�  QYYY0�  PQX=V�  �?  P�  QYYY0�  PQX=V�  �?  P�  QYYY0�   PQX=V�  �  ;�!  V�  �  T�  P�  QT�"  PQT�#  PQ�  ;�  V�  �  T�$  P�!  QT�%  PQ�  �?  P�  Q�  &�  �  V�  &�  L�  M�  V�  �  L�  L�  MMT�&  P�  QYYY0�'  PQX=V�  �  �?  P�  �>  P�(  T�)  P�  QQQ�  ;�*  �(  T�)  P�  Q�  &�*  �  �*  �  V�  )�+  �,  P�  QT�-  PQV�  �+  T�.  PQ�  �  �(  T�)  P�  Q�  �  PN�  V�  R�  V�  R�  V�  R�  V�  OQY` [remap]

path="res://Camera.gdc"
               [remap]

path="res://Object.gdc"
               [remap]

path="res://Player.gdc"
               [remap]

path="res://Room.gdc"
 [remap]

path="res://handler.gdc"
              [remap]

path="res://objects_handler.gdc"
      [remap]

path="res://socket.gdc"
               ECFG      _global_script_classes                     class         Handler       language      GDScript      path      res://handler.gd      base      Spatial             class         PersistObject         language      GDScript      path      res://Object.gd       base      Spatial    _global_script_class_icons@               Handler              PersistObject             application/config/name         slumber-party-room     application/run/main_scene         res://Game.tscn    autoload/ObjectsHandler$         *res://objects_handler.gd      autoload/Socket         *res://Socket.tscn     input/interact�              deadzone      ?      events              InputEventMouseButton         resource_local_to_scene           resource_name             device            alt           shift             control           meta          command           button_mask           position              global_position               factor       �?   button_index         pressed           doubleclick           script         input/zoom_in�              deadzone      ?      events              InputEventMouseButton         resource_local_to_scene           resource_name             device            alt           shift             control           meta          command           button_mask           position              global_position               factor       �?   button_index         pressed           doubleclick           script         input/zoom_out�              deadzone      ?      events              InputEventMouseButton         resource_local_to_scene           resource_name             device            alt           shift             control           meta          command           button_mask           position              global_position               factor       �?   button_index         pressed           doubleclick           script      	   input/pan�              deadzone      ?      events              InputEventMouseButton         resource_local_to_scene           resource_name             device            alt           shift             control           meta          command           button_mask           position              global_position               factor       �?   button_index         pressed           doubleclick           script         input/rotate�              deadzone      ?      events              InputEventMouseButton         resource_local_to_scene           resource_name             device            alt           shift             control           meta          command           button_mask           position              global_position               factor       �?   button_index         pressed           doubleclick           script      $   rendering/quality/driver/driver_name         GLES2   %   rendering/vram_compression/import_etc         &   rendering/vram_compression/import_etc2          )   rendering/environment/default_environment          res://default_env.tres             